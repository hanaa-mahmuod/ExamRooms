import { Toast } from "../Sweetalert";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
const CreateFolder = () => {
    const param=useParams();
    const navigate = useNavigate();
    const [folderName, setFolderName] = useState('');
    const [parentId, setParentId] = useState((!isNaN(param.folderId)&&param.folderId) ||'');


    const handelCreate = async (e) => {
        e.preventDefault();
    
        
        
        try {
        
            await (parentId ==='null')&& await setParentId('');
            console.log("parent",parentId);
           
            const response = await fetch(`https://localhost:7290/api/Folders/CreateFolder?id=${ parentId ||''}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                     'Authorization': `Bearer ${localStorage.getItem('tkn')}`
                },
                body: JSON.stringify({
                    folderName,
                })
            });

            if (response.ok) { // Check for successful response
                Toast.fire({
                    icon: "success",
                    title: "Folder Created Successfully"
                });
                navigate("/folders"); // Use "/" to navigate correctly
            } else {
                // Handle errors, e.g., show error message
                const errorText = await response.text(); // Get the response text
                console.log( "errors",errorText)
                Toast.fire({
                    icon: "error",
                    title: `Errorrs: ${errorText || 'An error occurred'}`
                });
            }
        } catch (error) {
            console.error('Error creating folder:', error);
            Toast.fire({
                icon: "error",
                title: "Failed to create folder"
            });
        }
    };

    return (
        <div className="w-screen">
            <form onSubmit={handelCreate}>
                <input
                    className="block"
                    type="text"
                    value={folderName}
                    onChange={(e) => setFolderName(e.target.value)}
                    placeholder="Enter folder name"
                />
                {/* <input
                    className="block"
                    type="number"
                    value={parentId || ''}
                    onChange={(e) => setParentId(Number(e.target.value))}
                    placeholder="Enter parent folder ID (optional)"
                /> */}
                <button type='submit'>Create Folder</button>
            </form>
        </div>
    );
};

export default CreateFolder;
