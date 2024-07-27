<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-5">
                <div class="message-box _success flex justify-center items-center flex-col">
                    <!-- <i class="fa fa-check-circle" aria-hidden="true"></i> -->
                    <img src="/images/success.png" alt="success" class="w-[300px]" />
                    <h2>Thanh Toán Thành Công!!!</h2>
                    <p>
                        Cảm ơn bạn đã tin tưởng sử dụng dịch vụ của chúng tôi <br />
                        Vui lòng kiểm tra mail để nhận thông báo thanh toán.
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
._failed {
    border-bottom: solid 4px red !important;
}
._failed i {
    color: red !important;
}

._success {
    box-shadow: 0 15px 25px #00000019;
    padding: 45px;
    width: 100%;
    text-align: center;
    margin: 40px auto;
    border-bottom: solid 4px #28a745;
}

._success i {
    font-size: 55px;
    color: #28a745;
}

._success h2 {
    margin-bottom: 12px;
    font-size: 40px;
    font-weight: 500;
    line-height: 1.2;
    margin-top: 10px;
}

._success p {
    margin-bottom: 0px;
    font-size: 18px;
    color: #495057;
    font-weight: 500;
}
</style>