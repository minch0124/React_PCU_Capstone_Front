import { Box, Container } from "@mui/system";
import { Alert, Avatar, Button, Checkbox, Fab, filledInputClasses, FormControlLabel, Grid, IconButton, Snackbar, Stack, TextField } from "@mui/material";
import React, { useRef, useState } from "react";
import CloseIcon from '@mui/icons-material/Close';

// 예시 데이터란
// function Data(name, level, nickname, email,introduce)
// {
//   return{name, level, nickname, email,introduce};
// }

// const rows = [
//   Data('최민성'),
//   Data('LV3 플레티넘'),
//   Data('분당 옴무무'),
//   Data('Oscar8925'),
//   Data('파이크쟁이입니다.'),
// ];

function UserPage()
{
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClose}>
        OTL 소식을 팔로우합니다!
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}>
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );
  // snackbar mui 기능

  const [Image, setImage] = useState("C:\Users\micle\React_PCU_Capstone_Front\src\img\profile.jpg")
  const fileInput = useRef(null)

    return(
        <Box sx={{ margin: -1 }}>
      <Container sx={{ textAlign: 'center', border: 2, borderRadius: 10, borderColor: 'primary.main', width: 1 / 2, mt:20 }}>
      {/* <CloudCircleIcon sx={{fontSize: 200, color: 'primary.main' }} /> */}
        <Box>
        <Stack direction="row" spacing={2}>
        <Avatar src={Image} sx={{ fontSize: 300, color: 'primary.main', mt:5 }} onClick={()=>{fileInput.current.click()}}/>
      {/* <Avatar sx={{ width: 56, height: 56, ml:7, mt:5}}></Avatar> */}
      </Stack>
      <TextField sx={{ml:1,mt:-5, width: 1/4, '.MuiInputBase-root': {borderRadius: 5,borderColor: "primary.main",}}} placeholder="이름"/> 
      <TextField sx={{ml:1,mt:-5, width: 1/4, '.MuiInputBase-root': {borderRadius: 5,borderColor: "primary.main",}}} placeholder="레벨"/> 
       {/* 프로필 사진 변경 기능 추가 및 구현해야함 onclick을 사용하여 프로필 사진 클릭시 프로필 변경창이 나와야함 */}
       
        {/* 활동레벨을 만들어 이름옆에 표시 == 네이버 내공, 싸이월드 느낌 */}
        {/* 추천수 표현(다른사람들이 이사람을 추천한 횟수) */}
        </Box>
        <Box>
         <TextField placeholder="닉네임" sx={{width: 1, mt: 3,'.MuiInputBase-root': {borderRadius: 5,borderColor: "primary.main",},}} />
        {/*  닉네임*/}
          <TextField placeholder="Email(아이디)" sx={{ width: 1, mt: 3,'.MuiInputBase-root': {borderRadius: 5, borderColor: "primary.main", },}}></TextField> 
         
          {/* <TextField placeholder="" sx={{width: 1, mt: 3, '.MuiInputBase-root': { borderRadius: 5,borderColor: "primary.main", },}} /> */}
          <TextField placeholder="자기소개글" sx={{width: 1, mt: 3, '.MuiInputBase-root': { borderRadius: 5,borderColor: "primary.main", },}} />
          <FormControlLabel control={<Checkbox defaultChecked sx={{ color: 'primary.main' }} />} label="OTL 소식을 팔로우합니다." sx={{ display: 'inline', alignSelf: 'left', color: 'primary.main'}} onClick={handleClick} />
          <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Note archived"
        action={action}
      />
          <Button variant="outlined" sx={{ width: 1 / 4, mt: 'auto', ml:'center' }} >회원 정보 변경</Button>
          <Fab></Fab>
          {/* 변경을 누르면 회원정보 수정 */}
          </Box>
           </Container>
        </Box>

    )
}

export default UserPage;

