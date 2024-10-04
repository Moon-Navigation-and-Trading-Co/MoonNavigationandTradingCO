import { createClient } from '@/utils/supabase/server'
import { redirect } from "next/navigation";

export default async function Page() {
    const supabase = createClient()

    const {
        data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
        return redirect("/sign-in");
    }

    const { data: notes } = await supabase.from('notes').select()

    const { data, error } = await supabase
        .from('notes')
        .insert([{ title: 'New Note 1' }])

    return <pre>This only works if user is logged in: {JSON.stringify(notes, null, 2)}</pre>
}
