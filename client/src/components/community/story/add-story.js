import React, { Component } from 'react'

class AddStory extends Component {
    render() {
        return (
            <div>
            <h1>Add Story</h1>
                <div class="row">
                <form action="/stories" method="post" class="col s12">
                    <div class="row">
                    <div class="input-field">
                        <input type="text" name="title" />
                        <label for="title">Title</label>
                    </div>
                    </div>

                    <div class="row">
                    <div class="input-field">
                        <select name="status">
                        <option value="public" selected>Public</option>
                        <option value="private">Private</option>
                        <option value="unpublished">Unpublished</option>
                        </select>
                        <label for="status">Status</label>
                    </div>
                    </div>

                    <div class="row">
                    <p>
                        <input type="checkbox" name="allowComments" class="filled-in" id="filled-in-box" checked="checked" />
                        <label for="filled-in-box">Allow Comments</label>
                    </p>
                    </div>

                    <div class="row">
                    <div class="input-field">
                        <h5>Tell Us Your Story:</h5>
                        <textarea name="body"></textarea>
                    </div>
                    </div>

                    <input type="submit" value="Save" class="btn" />
                </form>
                </div>                
            </div>
        )
    }
}
export default AddStory;
