import { defineConfig } from 'drizzle-kit';


export default defineConfig({
  schema: './utils/Schema.tsx',          
  dialect:'postgresql',                
  dbCredentials: {
    url: 'postgresql://neondb_owner:npg_kJOPx3AKSY6n@ep-red-star-a8zdiqq0-pooler.eastus2.azure.neon.tech/AI-Content-Generator?sslmode=require&channel_binding=require', 
  },                    
});