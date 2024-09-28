import { useState, useEffect } from 'react';
import { Container, Typography, Card, CardContent, CircularProgress, Box } from '@mui/material';
import { ArrowBack, Edit, Save } from '@mui/icons-material';
const Notes = () => {
//const [notes, setNotes] = useState([]);
const [loading, setLoading] = useState(true);
useEffect(() => {
    const fetchData = async () => {
    try {
        const response = await fetch('https://localhost:7290/api/ExamRooms/UserAccessibleNotes',{
            headers:{
                 'Authorization': `Bearer ${localStorage.getItem('tkn')}`
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