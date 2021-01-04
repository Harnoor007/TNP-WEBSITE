import React from "react";
import axios from "axios";
<<<<<<< HEAD
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

class CreatePosts extends React.Component {
=======
import Posts from "../../HomeComponent/PostComponents/Posts";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

class createPosts extends React.Component {
>>>>>>> c1c986f40eedf14809b0601cbe0018c4085274eb
    state = {
        title: '',
        type: '',
        description: ''
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }
<<<<<<< HEAD
    handleEditorInput =  ( event, editor ) => {
        const data = editor.getData();
        console.log( { event, editor, data } );
        this.setState({
            description: data,
        });
    } 
=======

>>>>>>> c1c986f40eedf14809b0601cbe0018c4085274eb
    savePost = async (e) => {
        e.preventDefault();
        const res = await axios.post("/addPost", this.state);
        if(res.data.status === 200){
            alert("Added Successfully");
            window.location.reload();
        }
    }

    render(){
        return(
            <div className="layout">
                <div className="actionDiv">
                    <div className="Formdiv">
                        <form onSubmit={this.savePost}>
                            <div className="form-group">
                                <label>Title:</label>
                                <input type="text" name="title" className="form-control highlight" 
                                value={this.state.title} onChange={this.handleInput}
                                placeholder="Enter the Title" required/>
                            </div>
                            <div className="form-group">
                                <label>Type:</label>
                                <select name="type" className="form-control highlight" 
                                value={this.state.type} onChange={this.handleInput}
                                required>
                                    <option value="none" selected disabled hidden>Select</option>
                                    <option value="Announcement">Announcement</option>
                                    <option value="Selection">Selection</option>
                                    <option value="Placement">Placement</option>
                                    <option value="Training">Training</option>
                                    <option value="Internship">Internship</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Description:</label>
                                <div className="App">
                                    <CKEditor
                                        editor={ ClassicEditor }
                                        data=""
                                        onReady={ editor => {
                                            // You can store the "editor" and use when it is needed.
                                            console.log( 'Editor is ready to use!', editor );
                                        } }
                                        onChange={this.handleEditorInput}                                        
                                        onBlur={ ( event, editor ) => {
                                            console.log( 'Blur.', editor );
                                        } }
                                        onFocus={ ( event, editor ) => {
                                            console.log( 'Focus.', editor );
                                        } }
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <button type="submit" className="primary">
                                    Add Post
                                </button>
                                {/* <Button variant="contained" color="primary">
                                  Add Post
                                </Button> */}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default CreatePosts;
