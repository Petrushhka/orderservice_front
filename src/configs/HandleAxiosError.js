export const handleAxiosError = (error, onLogout, navigate) => {
  if (!error.response) {
    console.error('네트워크 오류 또는 서버 응답 없음:', error);
    alert('서버와의 연결에 실패했습니다. 인터넷 연결을 확인해주세요.');
    return;
  }

  if (error.response.data?.statusMessage === 'EXPIRED_RT') {
    alert('시간이 경과하여 재 로그인이 필요합니다.');
    onLogout();
    navigate('/');
  } else if (error.response.data.message === 'NO_LOGIN') {
    alert('아예 로그인을 하지 않아서 재발급 요청 들어갈 수 없음!');
    navigate('/');
  } else if (error.response.data?.statusMessage === '재고 부족!') {
    alert('재고가 부족하여 주문이 불가능합니다. 관리자에게 문의하세요.');
    navigate('/');
  } else {
    // 만약 추가해야 할 예외 타입이 더 있다면 else if로 추가해서 써주시면 됩니다.
    throw error;
  }
};
