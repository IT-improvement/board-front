import React from 'react';
import './style.css';
import { commentListMock, favoriteListMock, latestBaordListMock, top3BaordListMock } from 'mocks';
import Top3Item from 'components/Top3Item';
import BoardItem from 'components/BoardItem';
import FavoriteItem from 'components/FavoriteItem';
import CommentItem from 'components/CommentItem';

//        component: 메인 화면 컴포넌트        //
export default function Main() {
  //        render: 메인 화면 컴포넌트 랜더링        //
  return (
    <>
     <div style={{display: 'flex', justifyContent: 'center', gap : '24px'}}>
      {top3BaordListMock.map(top3ListItem =><Top3Item top3ListItem={top3ListItem}/>)}
    </div>
   {latestBaordListMock.map(boardListItem =><BoardItem boardListItem={boardListItem} /> )}
    {/* <div style={{display:'flex', columnGap:'30px', rowGap:'20px'}}>
      {favoriteListMock.map(favoriteListItem => <FavoriteItem favoriteListItem={favoriteListItem}/>)}
    </div> */}
    {/* <div style={{padding: '0 20px', display:'flex', flexDirection:'column', gap:'30px'}}>
     {commentListMock.map(commentListItem =><CommentItem commentListItem={commentListItem}/>)} 
    </div> */}
    </>
  )
}
