import React from 'react';
import {Box, Link, Grid } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import ScrollArea from 'react-scrollbar';
import '../css/policy.css';
import PolicyImg from '../img/policy.png'

function Policy() {

    return (
        <>
            <div className="Center">
                <h1 className="h1title">PHOTO & RECIPE SHARING POLICY</h1>
                
            <Grid container spacing={2}>
            <Grid item xs={8}>
                <h2 className="h2title"> Chính sách chia sẻ ảnh & công thức </h2>
                <div className="LeftText">
                    <p>Nếu bạn có bất kỳ câu hỏi nào về chính sách chia sẻ ảnh và công thức dưới đây, vui lòng góp ý cho chúng tôi tại <Link href="#" underline="always">{'Cookaholic@gmail.com'}</Link></p>
                    <h2 className="h3title">Chính sách sử dụng ảnh:</h2>
                    <ul>
                        <li><p>Cookaholic sở hữu bản quyền hoặc có quyền sử dụng tất cả các bức ảnh trên trang web.</p></li>
                        <li><p>Nếu bạn muốn spotlight / tính một năng trong những công thức nấu ăn trên trang web này trên trang web hoặc blog của bạn, bạn có quyền xuất bản ảnh với Credit để Cookaholic và một liên kết rõ ràng trở lại trang web cụ thể đó nơi công thức có thể được tìm thấy.</p></li>
                        <li><p>Xuất bản ảnh của chúng tôi, cùng với công thức của chúng tôi hoặc xuất bản ảnh của chúng tôi với một công thức khác, không được phép.</p></li>
                        <li><p>Bạn cần sự cho phép sử dụng ảnh cho các mục đích riêng, chia sẻ công thức chế biến , v.v. miễn là các chính sách trên được tuân thủ.</p></li>
                    </ul>
                    <h2 className="h3title">Chính sách chia sẻ công thức:</h2>
                    <ul>
                        <li><p>Bạn không thể xuất bản lại bất kỳ công thức nào từ Cookaholic. Chúng tôi không cho phép các trang web hoặc ấn phẩm (như bản tin in và tạp chí) xuất bản công thức nấu ăn của chúng tôi. Công thức nấu ăn của chúng tôi là tài liệu có bản quyền và có thể không được xuất bản ở nơi khác.</p></li>
                        <li><p>Nếu bạn thực hiện một trong những công thức nấu ăn của chúng tôi và muốn chia sẻ công thức với bạn bè và gia đình của bạn trên Facebook, Instagram, qua email, trực tiếp, v.v., 
                            vui lòng hướng họ đến trang công thức trên Cookaholic nơi bạn tìm thấy công thức. Cung cấp cho chúng tôi Credit bằng cách gắn thẻ chúng tôi trên <Link href="#" underline="always">{'Facebook'}</Link> hoặc <Link href="#" underline="always">{'Instagram'}</Link> cũng tuyệt vời!.</p></li>
                        <li><p>Nếu bạn là một blogger đồng nghiệp muốn chia sẻ một trong những công thức nấu ăn của chúng tôi trên blog hoặc trang web của bạn, bạn chỉ có quyền làm như vậy với các điều kiện sau:</p>
                            <ul><li><p>Viết lại hoàn toàn các hướng dẫn bằng lời nói của riêng bạn (KHÔNG sao chép và dán của chúng tôi.</p></li></ul>
                            <ul><li><p>Nếu bạn không muốn viết lại các hướng dẫn bằng lời nói của riêng bạn, bạn có thể chia sẻ danh sách thành phần của chúng tôi CHỈ và hướng độc giả / người xem của bạn đến trang công thức nấu ăn của chúng tôi để có được hướng dẫn đầy đủ.</p></li></ul>
                            <ul><li><p>Trong mọi trường hợp, bạn phải cung cấp một liên kết rõ ràng và có thể nhấp trở lại trang công thức trên Cookaholic.</p></li></ul>
                        </li>
                        <li><p>Trong mọi trường hợp, công thức nấu ăn hoặc bài đăng trên blog hoặc bài viết của chúng tôi có thể được sao chép và dán như hiện tại và trực tiếp lên các trang web hoặc blog khác.</p></li>
                    </ul>
                </div>
                
            </Grid>
            <Grid item xs={4}>
                <h3 className="titleRight">Welcome to Cookaholic!</h3>
                <p>It doesn't take complicated recipes to make treasured food memories. Join us for easy recipes that you'll want to make again and again!</p>
                <Box x={{
                    fontSize: '20px',
                    padding: '10px',
                }}>
                    <a className="IconSpace"><FacebookIcon/></a>
                    <a className="IconSpace"><InstagramIcon/></a>
                    <a className="IconSpace"><PinterestIcon/></a>
                    <a className="IconSpace"><TwitterIcon/></a>
                </Box>
                <img width="70%" src={PolicyImg} />
            </Grid>
            </Grid>    
            </div>
            
            

        </>);
}

export default Policy;