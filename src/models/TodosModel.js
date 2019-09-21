import { firebaseDatabaseRef } from '../firebase/index';

const modelName = 'todos';

const todosModel = {
    child:(key = null) => {
        return (key === null) ?
            firebaseDatabaseRef.child(modelName) :
            firebaseDatabaseRef.child(modelName + '/' + key);
    },
    add: (todo) => {   
        return new Promise((resolve, reject) => {
            todosModel
                .child()
                .push()
                .set(todo, error => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve({});
                    }
                });
        });  
        
    },
    update: (key, todo) => {
        return new Promise((resolve, reject) => {
            todosModel.child(key)
             .set(todo, error => {
                if (error) {
                    reject(error);
                } else {
                    resolve({});
                }
             });
        });        
    },
    list: () => {
        return new Promise((resolve, reject) => {
            todosModel.child().on('value', result => {
                if (result) {
                    resolve(result.val());
                } else {
                    reject(result);
                }
            });
        })
    },
    find: (key) => {
        return new Promise((resolve, reject) => {
            return todosModel.child(key)
                .on("value", result => {
                    if (result) {
                        resolve(result);
                    } else {
                        reject(result);
                    }
                });
        });        
    }
}

export default todosModel;