import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Toast } from '../Sweetalert';

const EditFolder = () => {
    const [folderName, setFolderName] = useState('');
    const param=useParams();
    const navigate = useNavigate();

    const handleEdit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`https://localhost:5001/api/Folders/Edit/${param.folderId}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjEwMTEiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiJtYWhtdWRuYWdpQGdtYWlsLmNvbSIsImV4cCI6MTcyNzI2NTUyMywiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo3MjkwLyIsImF1ZCI6Imh0dHA6Ly9sb2NhbGhvc3Q6NzI5MCJ9.BdgJCBUQV8eO-nqYNW5WdRt3PhPEoTFFpwUFb_lJOQc"

                },
                body: JSON.stringify({folderName}) // إرسال اسم المجلد ضمن جسم الطلب
            });

            if (response.ok) {
                Toast.fire({
                    icon: "success",
                    title: "Folder updated successfully"
                });
                navigate(`/folders/folder/${param.folderId}`); // إعادة توجيه المستخدم إلى صفحة المجلدات
            } else {
                const errorData = await response.json();
                Toast.fire({
                    icon: "error",
                    title: `Error: ${errorData.message || 'An error occurred'}`
                });
            }
        } catch (error) {
            console.error('Error updating folder:', error);
            Toast.fire({
                icon: "error",
                title: "Failed to update folder"
            });
        }
    };

    return (
        <div>
            <form onSubmit={handleEdit}>
                <input
                    type="text"
                    value={folderName}
                    onChange={(e) => setFolderName(e.target.value)}
                    placeholder="Enter new folder name"
                />
                <button type="submit">Update Folder</button>
            </form>
        </div>
    );
};

export default EditFolder;
