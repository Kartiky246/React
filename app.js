const e = React.createElement("p",{id:'head'},'HELLO!');
const root = ReactDOM.createRoot(document.getElementById('id'));

console.log(e) // will give object where props field have attribute and children

const div = React.createElement('div',{id:'parent'},React.createElement('div',{id:'child'},[React.createElement('h1',{id:'heading'},'Hello'),React.createElement('h1',{id:'heading'},'Hello')]));
root.render(div); // convert react object into html