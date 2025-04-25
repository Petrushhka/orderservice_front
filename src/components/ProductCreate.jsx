import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Container,
  Grid,
  TextField,
} from '@mui/material';
import React, { useContext, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import addImage from '../assets/image-add.png';
import { API_BASE_URL } from '../configs/host-config';
import AuthContext from '../context/Usercontext';
import { handleAxiosError } from '../configs/HandleAxiosError';

const ProductCreate = () => {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [stockQuantity, setStockQuantity] = useState('');
  const [productImage, setProductImage] = useState(null);
  const navigate = useNavigate();
  const { onLogout } = useContext(AuthContext);

  // useRef를 사용하여 특정 요소를 참조하기
  const $fileTag = useRef();

  const productCreate = async (e) => {
    e.preventDefault();

    try {
      const registsData = new FormData();
      registsData.append('name', name);
      registsData.append('category', category);
      registsData.append('price', price);
      registsData.append('stockQuantity', stockQuantity);
      registsData.append('productIamge', productIamge);

      //axiosInstance의 기본 컨텐트 타입은 JSON -> JSON 보낼 때는 개꿀
      // 지금 우리가 보내야 되는 컨텐트는 FormData -> multipart/form-data 직접 명시
      await axiosInstance.post(
        `${API_BASE_URL & { PROD }}/create`,
        registsData,
        {
          headers: {
            'Content-type': 'multipart/form-data',
          },
        },
      );
      alert('상품 등록 완료');
      navigate('/product/list');
    } catch (e) {
      handleAxiosError(e, onLogout, navigate);
    }
  };

  // 사용자가 파일을 선택해서 업로드하면 정보를 읽어들여서
  // 썸네일을 띄우는 함수
  const fileUpdate = () => {
    const file = $fileTag.current.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setProductImage(reader.result);
    };
  };

  return (
    <Container>
      <Grid container justifyContent='center'>
        <Grid item xs={12} md={8}>
          <Card>
            <CardHeader title='상품등록' style={{ textAlign: 'center' }} />
            <CardContent>
              <form onSubmit={productCreate}>
                <div
                  className='thumbnail-box'
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    cursor: 'pointer',
                  }}
                  onClick={() => $fileTag.current.click()}
                >
                  <img
                    src={productImage || addImage}
                    alt='prod-image'
                    style={{ width: '450px' }}
                  />
                </div>
                <TextField
                  label='상품명'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  fullWidth
                  margin='normal'
                  required
                />
                <TextField
                  label='카테고리'
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  fullWidth
                  margin='normal'
                  required
                />
                <TextField
                  label='가격'
                  type='number'
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  fullWidth
                  margin='normal'
                  required
                />
                <TextField
                  label='재고수량'
                  type='number'
                  value={stockQuantity}
                  onChange={(e) => setStockQuantity(e.target.value)}
                  fullWidth
                  margin='normal'
                  required
                />
                <input
                  type='file'
                  accept='image/*'
                  onChange={fileUpdate}
                  style={{ display: 'none' }}
                  required
                  ref={$fileTag}
                />
                <Button
                  type='submit'
                  color='primary'
                  variant='contained'
                  fullWidth
                >
                  등록
                </Button>
              </form>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProductCreate;
