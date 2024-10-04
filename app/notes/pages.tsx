import { createClient } from '@/utils/supabase/server'

export default async function Page() {
    const supabase = createClient()
    const { data: notes } = await supabase.from('notes').select()

    const { data, error } = await supabase
        .from('notes')
        .insert([{ title: 'New Note 1' }])

    return <pre>{JSON.stringify(notes, null, 2)}</pre>
}
