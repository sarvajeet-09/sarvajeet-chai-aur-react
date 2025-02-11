import { useState } from 'react'
import React from 'react'
import './MessageSender.css'
import { Avatar } from '@mui/material'
import VideocamIcon from '@mui/icons-material/Videocam'
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary'
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon'

function MessageSender() {
    const [input, setInput] = useState('')
    const [imageUrl, setImageUrl] = useState("")


    const handleSubmit = e => {
        e.preventDefault();

     //some database code 




    setInput("")
    setImageUrl("")
    }

    return (
        <div className='MessageSender'>
            <div className="MessageSender_top">
                <Avatar />
                <form>
                    <input

                        value={input}
                        onChange={e => setInput(e.target.value)}
                        className='MessageSender_input'
                        placeholder={"What's On your Mind?"}
                    />
                    <input
                        value={imageUrl}
                        onChange={e => setImageUrl(e.target.value)}
                        className=""
                        placeholder="Image URL Optional"
                    />
                    <button type='submit' onClick={handleSubmit}>
                        Hidden Button
                    </button>
                </form>
            </div>
            <div className="MessageSender_bottom">
                <div className="MessageSender-option">
                    <VideocamIcon style={{ color: "red" }} />
                    <h3>Live Video</h3>
                </div>
                <div className="MessageSender-option">
                    <PhotoLibraryIcon style={{ color: "green" }} />
                    <h3>photo/Video</h3>
                </div>
                <div className="MessageSender-option">
                    <InsertEmoticonIcon style={{ color: "orange" }} />
                    <h3>photo/Video</h3>
                </div>
            </div>
        </div>
    )
}

export default MessageSender