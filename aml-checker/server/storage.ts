import { users, customCategories, savedServices } from "@shared/schema";
import type {
  User, InsertUser,
  CustomCategory, InsertCustomCategory,
  SavedService, InsertSavedService,
} from "@shared/schema";
import { drizzle } from "drizzle-orm/better-sqlite3";
import Database from "better-sqlite3";
import { eq, asc } from "drizzle-orm";

// Use persistent disk path on Render, fall back to local for dev
const DB_PATH = process.env.RENDER ? "/data/data.db" : "data.db";
const sqlite = new Database(DB_PATH);
sqlite.pragma("journal_mode = WAL");

export const db = drizzle(sqlite);

// ── Run migrations (create tables if they don't exist) ─────────────────────
sqlite.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL
  );

  CREATE TABLE IF NOT EXISTS custom_categories (
    id TEXT PRIMARY KEY,
    label TEXT NOT NULL,
    icon TEXT NOT NULL DEFAULT '📁',
    created_at INTEGER NOT NULL
  );

  CREATE TABLE IF NOT EXISTS saved_services (
    id TEXT PRIMARY KEY,
    category_id TEXT NOT NULL,
    label TEXT NOT NULL,
    data TEXT NOT NULL,
    created_at INTEGER NOT NULL
  );
`);

// ── Storage interface ──────────────────────────────────────────────────────
export interface IStorage {
  // Users
  getUser(id: number): User | undefined;
  getUserByUsername(username: string): User | undefined;
  createUser(user: InsertUser): User;

  // Custom categories
  getAllCustomCategories(): CustomCategory[];
  upsertCustomCategory(cat: InsertCustomCategory): CustomCategory;

  // Saved services
  getAllSavedServices(): SavedService[];
  upsertSavedService(svc: InsertSavedService): SavedService;
  deleteSavedService(id: string): void;
}

export class DatabaseStorage implements IStorage {
  // ── Users ─────────────────────────────────────────────────────────────────
  getUser(id: number): User | undefined {
    return db.select().from(users).where(eq(users.id, id)).get();
  }

  getUserByUsername(username: string): User | undefined {
    return db.select().from(users).where(eq(users.username, username)).get();
  }

  createUser(insertUser: InsertUser): User {
    return db.insert(users).values(insertUser).returning().get();
  }

  // ── Custom categories ─────────────────────────────────────────────────────
  getAllCustomCategories(): CustomCategory[] {
    return db.select().from(customCategories).orderBy(asc(customCategories.createdAt)).all();
  }

  upsertCustomCategory(cat: InsertCustomCategory): CustomCategory {
    return db
      .insert(customCategories)
      .values(cat)
      .onConflictDoUpdate({ target: customCategories.id, set: { label: cat.label, icon: cat.icon } })
      .returning()
      .get();
  }

  // ── Saved services ────────────────────────────────────────────────────────
  getAllSavedServices(): SavedService[] {
    return db.select().from(savedServices).orderBy(asc(savedServices.createdAt)).all();
  }

  upsertSavedService(svc: InsertSavedService): SavedService {
    return db
      .insert(savedServices)
      .values(svc)
      .onConflictDoUpdate({
        target: savedServices.id,
        set: { label: svc.label, categoryId: svc.categoryId, data: svc.data },
      })
      .returning()
      .get();
  }

  deleteSavedService(id: string): void {
    db.delete(savedServices).where(eq(savedServices.id, id)).run();
  }
}

export const storage = new DatabaseStorage();
