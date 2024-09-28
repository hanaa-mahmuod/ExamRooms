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
            const response = await fetch(`https://localhost:7290/api/Folders/Edit/${param.folderId}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
              'Authorization': `Bearer ${localStorage.getItem('tkn')}`
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
        <div className='w-screen'>
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
