import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface Variables {
  id?: string;
  variable_1: string;
  variable_2: string;
  created_at?: string;
  updated_at?: string;
}

// Get the latest variables record
export async function getLatestVariables(): Promise<Variables | null> {
  const { data, error } = await supabase
    .from('variables')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(1);

  if (error) {
    console.error('Error fetching variables:', error);
    throw new Error(error.message);
  }

  // If no data or empty array, return null
  if (!data || data.length === 0) {
    return null;
  }

  // Return the first (latest) record
  return data[0];
}

// Create a new variables record
export async function createVariables(variables: Omit<Variables, 'id' | 'created_at' | 'updated_at'>): Promise<Variables> {
  const { data, error } = await supabase
    .from('variables')
    .insert([variables])
    .select()
    .single();

  if (error) {
    console.error('Error creating variables:', error);
    throw new Error(error.message);
  }

  return data;
}

// Get all variables (for history if needed)
export async function getAllVariables(): Promise<Variables[]> {
  const { data, error } = await supabase
    .from('variables')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching all variables:', error);
    throw new Error(error.message);
  }

  return data || [];
}