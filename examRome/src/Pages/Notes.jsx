    import { useState, useEffect } from 'react';
    import { Container, Typography, Card, CardContent, CircularProgress, Box } from '@mui/material';
    import { ArrowBack, Edit, Save } from '@mui/icons-material';

    const Notes = () => {
    //const [notes, setNotes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
        try {
            const response = await fetch('/api/ExamRooms/UserAccessibleNotes',{
                headers:{
                    "Authorization":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjEwMTEiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiJtYWhtdWRuYWdpQGdtYWlsLmNvbSIsImV4cCI6MTcyNzI2NTUyMywiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo3MjkwLyIsImF1ZCI6Imh0dHA6Ly9sb2NhbGhvc3Q6NzI5MCJ9.BdgJCBUQV8eO-nqYNW5WdRt3PhPEoTFFpwUFb_lJOQc"
                }
            });
            if (!response.ok) {
            // Log the response if it's not OK (status code not 200)
            const errorText = await response.text();  // Log the raw response
            console.log('Error response:', errorText);
            throw new Error(`Error: ${response.status} ${response.statusText}`);
            }
            const data = await response.json();  // Convert the response to JSON
            console.log('Notes content:', data);
            setLoading(false);
        } catch (err) {
            console.log('Errors:', err);
            setLoading(false);
        }
        };
    
        // Fetch data from API using fetch
        fetchData();
    }, []);

    if (loading) {
        return <CircularProgress />;
    }

    return (<>
    
    <h1>welcome</h1>
    </>
        // <Container>
        // <Box display="flex" alignItems="center" mb={2}>
        //     <ArrowBack style={{ marginRight: '8px' }} />
        //     <Typography variant="h4">Accessible Exam Room Notes</Typography>
        // </Box>
        // {notes?.$values.map((note, index) => (
        //     <Card key={index} style={{ marginBottom: '16px' }}>
        //     <CardContent>
        //         <Typography variant="h6">{note.ExamRoom.name}</Typography>
        //         <Typography variant="body1">{note.NoteContent}</Typography>
        //         <Box display="flex" justifyContent="flex-end" mt={2}>
        //         <Edit style={{ marginRight: '8px' }} />
        //         <Save />
        //         </Box>
        //     </CardContent>
        //     </Card>
        // ))}
        // </Container>
    );
    };

    export default Notes;
