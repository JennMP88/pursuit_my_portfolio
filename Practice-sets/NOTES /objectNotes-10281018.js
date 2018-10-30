const dawg2={}
const dawg={}

dawg.name="Rocky";
dawg.breed="pitbull";
dawg.isMale=true;

dawg.greet=()=>{
    return "woof"
}

dawg.siblings=[dawg]

const fbUser=(fN,lN,id_,pw,dob,gender)=>{
    const u={
    id_, //id_: id_  creates a new property 
    dob,
    gender,
    pw,
 };
    //computed property
    u.fullName=[fN,lN].join(' ');
    u.firstName=fN;
    u.lastName=lN;
    u.id_=id_;

    u.idType =id_.includes("@")? "EMAIL": "MOBILE";  /*if (id_.includes('@')) {  u.idType=id="EMAIL";}else { u.idType="Mobile"; }*/
    //u.dob=dob;
    u.age=Math.floor(Date.now() - new Date(dob).getTime())
    u.post=[];

/*for dob function
    const constants={
        milliseconds: 10000,
            seconds: 60,
                minutes:60
                hours:24
                DynamicsCompressorNode:7
                week:52 */
    }
    u.createPost= (msg, photos)=>{
        return fbPost(msg,photos);
    }
    //FINISH WRITING ME FOR DOB FUNCTION
   // u.getAgeInyEARS=()=>{
     //   RETURN Math.floor(U.age)
    //}
   return u;
}
}
console.log(fbUser("taq","karin","taqqui.karim@gmail.com", "asdff","August 2, 1960", "male"))