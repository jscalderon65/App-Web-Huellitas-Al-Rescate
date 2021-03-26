export const getCoursesByTitle = (name="",data) => {
    if(name===""){
        return []
    }
    name=name.toLocaleLowerCase();
    return data.filter(data=>data.titulo.toLocaleLowerCase().includes(name));
}