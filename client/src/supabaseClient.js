// src/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

// Project URL and API key from your assignment instructions
const SUPABASE_URL = 'https://pgegahivgrtrecnegrck.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBnZWdhaGl2Z3J0cmVjbmVncmNrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzA3ODI0OTUsImV4cCI6MjA0NjM1ODQ5NX0.G8IMshG-zlsrx2lXJCOPgYqkYlCps4uuBpYepn3mtks';

// Initialize Supabase client
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

export default supabase;
