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
           
            const response = await fetch(`https://localhost:5001/api/Folders/CreateFolder?id=${ parentId ||''}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjEwMTEiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiJtYWhtdWRuYWdpQGdtYWlsLmNvbSIsImV4cCI6MTcyNzI2NTUyMywiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo3MjkwLyIsImF1ZCI6Imh0dHA6Ly9sb2NhbGhvc3Q6NzI5MCJ9.BdgJCBUQV8eO-nqYNW5WdRt3PhPEoTFFpwUFb_lJOQc"
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
        <div>
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

<<<<<<< HEAD
export default CreateFolder;
=======
export default CreateFolder;
>>>>>>> 657e6777a99d405997b3d147af5e10174787c1c8
