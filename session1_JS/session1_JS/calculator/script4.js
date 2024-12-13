let MemberType = "";
let age = "";
let msg = "";

function displayProfile(){
    MemberType = document.getElementById("memberType").value.toLowerCase();
    age = document.getElementById("age");

    if(MemberType == "admin")
    {
        msg = "Welcome Admin";
    }
    else if(MemberType == "member" && age >= "18")
    {
        msg = "Access Granted, valued member";
    }
    else
    {
        msg = "Guest Access only";
    }

    switch(MemberType)
    {
        case "admin":
            msg +=", full admin privileges.";
            break;
        case "member":
            msg +=", member dashboard access.";
            break;
        default:
            msg +=", limited Access."
    }

    document.getElementById("profile").textContent = message;
}