'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'

export async function login(formData: FormData) {
  const supabase = createClient()

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }

  console.log("tried running login function")

  const { error } = await supabase.auth.signInWithPassword(data)

  if (error) {
    console.log("error here!")
    redirect('/login?message=Could not authenticate user')
  }

  revalidatePath('/', 'layout')
  redirect('/searchui')
}

export async function signup(formData: FormData) {
  const supabase = createClient()

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }
  console.log("trying to run the mf singupcode")
  const { error } = await supabase.auth.signUp(data)

  if (error) {
    console.log("error when trying to sign up!!!")
    redirect('/login?message=Error Signing Up New User')
  }

  revalidatePath('/', 'layout')
  redirect('/login')
}