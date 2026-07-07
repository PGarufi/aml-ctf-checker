import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// ── Users (template default — kept for compatibility) ──────────────────────
export const users = sqliteTable("users", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});
export const insertUserSchema = createInsertSchema(users).omit({ id: true });
export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

// ── Custom categories saved by users ──────────────────────────────────────
export const customCategories = sqliteTable("custom_categories", {
  id: text("id").primaryKey(),          // e.g. "custom-1720000000000"
  label: text("label").notNull(),
  icon: text("icon").notNull().default("📁"),
  createdAt: integer("created_at").notNull(), // unix ms
});
export const insertCustomCategorySchema = createInsertSchema(customCategories);
export type InsertCustomCategory = z.infer<typeof insertCustomCategorySchema>;
export type CustomCategory = typeof customCategories.$inferSelect;

// ── AI-researched services saved by users ─────────────────────────────────
export const savedServices = sqliteTable("saved_services", {
  id: text("id").primaryKey(),          // e.g. "search-1720000000000"
  categoryId: text("category_id").notNull(),
  label: text("label").notNull(),
  // Full TransactionType payload stored as JSON
  data: text("data").notNull(),         // JSON string
  createdAt: integer("created_at").notNull(), // unix ms
});
export const insertSavedServiceSchema = createInsertSchema(savedServices);
export type InsertSavedService = z.infer<typeof insertSavedServiceSchema>;
export type SavedService = typeof savedServices.$inferSelect;
