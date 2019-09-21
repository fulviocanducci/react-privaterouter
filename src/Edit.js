import React, { useState, useEffect } from 'react';
import { todosModel } from './models';

export default function Edit(props) {    
    const [key,] = useState(props.match.params.id);
    const [id, setId] = useState('');
    const [description, setDescription] = useState('');
    const [done, setDone] = useState(false);

    useEffect(() => {
        return () => { console.log('umount');}
    }, [])

    useEffect(() => {        
        todosModel.find(key)
            .then(result => {
                const item = result.val() || null;
                if (item) {
                    setId(item.id);
                    setDescription(item.description);
                    setDone(item.done);
                } 
            });
    }, [key]);

    function handlerSubmit(e) {
        e.preventDefault();
        const data = { id, description, done };
        todosModel.update(key, data)
            .then(() => props.history.push('/'))
            .catch((error) => console.log(error));       
    }

    return (
        <>
            <h1 className="title">
                Edit
            </h1>
            <h2 className="subtitle">
                Editing ...
            </h2>
            <div>
                <form onSubmit={handlerSubmit}>                    
                    <div className="field">
                        <label className="label">Description</label>
                        <div className="control">
                            <input className="input" value={description} onChange={e => setDescription(e.target.value)} type="text" placeholder="Text input" />
                        </div>
                    </div>
                    <div className="field">
                        <div className="control">
                            <label className="checkbox">
                            <input type="checkbox" checked={done} onChange={e => setDone(e.target.checked)} />Done
                            </label>
                        </div>
                    </div>
                    <div>
                        <button className="button is-default">Send</button>
                    </div>
                </form>
            </div>
        </>
    )
}