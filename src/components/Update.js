import axios from "axios"
export default function update(){
    function handleUpdate(){
        axios.put('http://localhost:8081/Update',{
            name:document.getElementById("idname").value,
            password:document.getElementsByName("pwd")[0].value,
            email:document.getElementsByName("email")[0].value,
            role:document.getElementById("idrole").value
        }).then((res)=>{
            console.log(res.data)
        })
    }
    return(
        <div>
            <input type="text" name="name" id="idname" placeholder="name" />
            <input type="password" name="pwd" id="idpwd" placeholder="password" />
            <input type="text" name="email" id="idemail" placeholder="email" />
            <input type="text" name="role" id="idrole"placeholder="role" />
            <button onClick={handleUpdate}>update</button>
        </div>
    )
}
