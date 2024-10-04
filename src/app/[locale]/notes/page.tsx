// app/[locale]/notes/page.tsx
import { createClient } from '@/utils/supabase/server';
import NoteForm from './NoteForm'; // Import the client component for inserting notes
import { redirect } from "next/navigation";

interface PageProps {
    params: {
        locale: string;
    };
}

export default async function Page({ params: { locale } }: PageProps) {
    const supabase = createClient();

    // Check if the user is authenticated
    const {
        data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
        // Redirect to sign-in if the user is not authenticated
        redirect('/sign-in');
    }

    // Fetch notes from the database
    const { data: notes } = await supabase.from('notes').select();

    return (
        <div>
            <h1>Notes</h1>
            <pre>
                This only works if user is logged in: {JSON.stringify(notes, null, 2)}
            </pre>

            {/* Render the client component for adding a new note */}
            <NoteForm locale={locale} />
        </div>
    );
}