//Để chứng minh bạn đã xong Ngày 1-2, hãy mở VS Code và viết đoạn code sau (không nhìn tài liệu):

// Đề bài: Viết một Arrow Function tên là tinhXepLoai.


const tinhXepLoai = (diemTB) =>{
    if(diemTB  >= 8){
        return "Gioi"
    }else if(diemTB >= 6.5){
        return "Kha"
    }else if(diemTB >= 4.5){
        return "Trung binh"
    }else{
        return "Yeu"
    }
};

const ketQua = tinhXepLoai(7.5);
console.log(`Học sinh này xếp loại: ${ketQua}`);