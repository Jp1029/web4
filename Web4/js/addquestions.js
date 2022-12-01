function getMyData (){
    const question = document.getElementById ("q").value +"." +
    document.getElementById ("q").value;
    const a = document.getElementById("a").value; 
    const b = document.getElementById ("b").value; 
    const c = document.getElementById ("c").value; 
    const d = document.getElementById ("d").value;
    const  correctAnswer  = document.getElementById("ca").value;
    const  newData  = { question, answers:  { a, b, c, d }, correctAnswer }
    if(question != "" && a != "" && b  !=  "" &&  c  != "" &&  d  != "" &&
    correctAnswer  != ""){
    questionBank.push(newData);
    document.getElementById('qCount').innerHTML= 
    questionBank.length;
    document.getElementById("addQuestion").reset();

}
    return questionBank ;
}