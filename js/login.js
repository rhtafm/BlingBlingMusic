$('.modal .login').each(function() {
    $(this).click(function() {
        $('.flip-modal').removeClass('register');
        $('.flip-modal').addClass('login');
    });
});
$('.modal .register').each(function() {
    $(this).click(function() {
        $('.flip-modal').removeClass('login');
        $('.flip-modal').addClass('register');
    });
});
var email = /^[0-9a-zA-Z_]+@[0-9a-zA-Z_]+(.[0-9a-zA-Z_]+)+$/; //邮箱正则表达式   例：blingbling@gmail.com
$('.modal-login form').bind('submit', function(e) { //绑定事件 提交数据之前先用正则表达式 验证表单
    if (!email.test($('.modal-login input[name=username]').val())) {
        $('.modal-login .errormsg').html('请输入合法的邮箱');
        return false;
    }
    if (!/^\w{6,10}$/.test($('.modal-login input[name=password]').val())) {
        $('.modal-login .errormsg').html('密码需输入6-10个字符，包括字母数字下划线');
        return false;
    }
    $(this).submit();
});
$('.modal-register form').bind('submit', function(e) {
    if (!email.test($('.modal-register input[name=username]').val())) {
        $('.modal-register .errormsg').html('请输入合法的邮箱');
        return false;
    }
    if (/^jixing$|^blingbling$/.test($('.modal-register input[name=username]').val())) { //假设已经存在两个用户
        $('.modal-register .errormsg').html('用户名已存在');
        return false;
    }
    if (!/^\w{6,10}$/.test($('.modal-register input[name=password]').val())) {
        $('.modal-register .errormsg').html('密码需输入6-10个字符，包括字母数字下划线');
        return false;
    }
    if ($('.modal-register input[name=password]').val() !== $('.modal-register input[name=password2]').val()) {
        $('.modal-register .errormsg').html('两次输入的密码不一致');
        return false;
    }
    $(this).submit();
})