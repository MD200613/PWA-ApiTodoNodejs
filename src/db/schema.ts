import { ForeignKey } from 'drizzle-orm/gel-core';
import { mysqlTable, varchar, boolean, int, decimal, timestamp } from 'drizzle-orm/mysql-core';

// On défini le schéma ici. C'est ce qui sera utilisé pour créer la table dans la base de données.
// On utilise les types de Drizzle pour définir les colonnes de la table.
// Chaque colonne est définie avec un type, une longueur (si applicable) et des contraintes
export const todos = mysqlTable('todos', {
  id: varchar('id', { length: 36 }).primaryKey(),
  text: varchar('text', { length: 500 }).notNull(),
  isCompleted: boolean('is_completed').default(false).notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().onUpdateNow().notNull()
});

//Table des différents rôles utilisateurs
export const userRoles = mysqlTable('user_roles', {
  id: varchar('id', { length: 36 }).primaryKey(),
  description: varchar('description', { length: 100 }).notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().onUpdateNow().notNull()
});

//Table des utilisateurs
export const users = mysqlTable('users', {
  id: varchar('id', { length: 36 }).primaryKey(),
  name: varchar('name', { length: 100 }).notNull(),
  surname: varchar('surname', { length: 100 }).notNull(),
  email: varchar('email', { length: 100 }).notNull().unique(),
  password: varchar('password', { length: 200 }).notNull(),
  roleId: varchar('roleId', { length: 36 }).notNull().references(() => userRoles.id),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().onUpdateNow().notNull()  
});

//Table des types de lits 
export const bedTypes = mysqlTable('bed_types', {
  id: varchar('id', { length: 36 }).primaryKey(),
  description: varchar('description', { length: 100 }).notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().onUpdateNow().notNull()
});

export const bedrooms = mysqlTable('bedrooms', {
  id: varchar('id', { length: 36 }).primaryKey(),
  bedroomNumber: int('bedroomNumber').notNull().unique(),
  bedroomType: varchar('bedroomType', {length: 50}).notNull(),
  description: varchar('description', {length: 200}).notNull(),
  nbMaxClients: int('nbMaxClients').notNull(),
  sizeInMeterSquare: decimal('sizeInMeterSquare').notNull(),
  bed1: varchar('bed1', { length: 36 }).notNull().references(() => bedTypes.id),
  bed2: varchar('bed2', { length: 36 }).references(() => bedTypes.id),
  price: decimal('price').notNull(),
  hotelName: varchar('hotelName', {length: 100}).notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().onUpdateNow().notNull()
})