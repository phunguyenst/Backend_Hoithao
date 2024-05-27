function validateInput(email, password, DiaChi, SoDienThoai) {
    //check email
    const EMAIL_REG = /[a-zA-Z][a-zA-Z0-9_\.]{1,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}/g;
    if(email.match(EMAIL_REG)){
        $("#email").removeClass("is-invalid");
    } else {//empty email input or invalid email
        $("#email").addClass("is-invalid");
    }

    //check password
    if(password.length > 2){
        $("#password").removeClass("is-invalid");
    } else {
        $("#password").addClass("is-invalid");
    }

    //check DiaChi
    if(DiaChi.trim().length > 0){
        $("#DiaChi").removeClass("is-invalid");
    } else {
        $("#DiaChi").addClass("is-invalid");
    }

    //check SoDienThoai
    const PHONE_REG = /^\d{10,11}$/;
    if(SoDienThoai.match(PHONE_REG)){
        $("#SoDienThoai").removeClass("is-invalid");
    } else {
        $("#SoDienThoai").addClass("is-invalid");
    }

    if(!email.match(EMAIL_REG) || password.length <= 2 || DiaChi.trim().length === 0 || !SoDienThoai.match(PHONE_REG))
        return true; //has errors

    return false;
}

function handleClickRegisterBtn() {
    $("#registerBtn").on("click", function(event) {
        event.preventDefault();

        let email = $("#email").val();
        let password = $("#password").val();
        let TenNguoiDung = $("#TenNguoiDung").val();
        let DiaChi = $("#DiaChi").val();
        let SoDienThoai = $("#SoDienThoai").val(); // Lấy giá trị của trường số điện thoại

        //validate input
        let check = validateInput(email, password, DiaChi, SoDienThoai);

        if (!check) {
            //send data to node server with ajax
            //url map to http://localhost/register-new-user
            $.ajax({
                url: `${window.location.origin}/register-new-user`,
                method: "POST",
                data: {TenNguoiDung: TenNguoiDung, email: email, password: password, DiaChi: DiaChi, SoDienThoai: SoDienThoai}, // Thêm SoDienThoai vào dữ liệu gửi đi
                success: function(data) {
                    alert("Create a new account succeeds!");
                    window.location.href = "/login";
                    // console.log(data);
                },
                error: function(err) {
                    // console.log(err);
                   alert(err.responseText);
                }
            });
        } else {
            alert("Please correct the errors in your inputs.");
        }
    });
}

$(document).ready(function() {
    handleClickRegisterBtn();
});
