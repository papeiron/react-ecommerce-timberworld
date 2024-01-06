import supabase from './supabase';

type registerPara = {
  fullName: string;
  email: string;
  password: string;
};

export async function register({ fullName, email, password }: registerPara) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        fullName
      }
    }
  });

  if (error) throw new Error(error.message);

  return data;
}

type loginPara = {
  email: string;
  password: string;
};

export async function login({ email, password }: loginPara) {
  let { data, error } = await supabase.auth.signInWithPassword({
    email,
    password
  });

  if (error) throw new Error(error.message);

  return data;
}

export async function getCurrentUser() {
  const { data: session } = await supabase.auth.getSession();

  if (!session.session) return null;

  const { data, error } = await supabase.auth.getUser();

  if (error) throw new Error(error.message);
  return data?.user;
}

export async function logout() {
  const { error } = await supabase.auth.signOut();

  if (error) throw new Error(error.message);
}
