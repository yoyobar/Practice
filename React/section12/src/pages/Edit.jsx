import {useParams, useNavigate} from 'react-router-dom';
import Header from '../components/Header';
import Button from '../components/Button';
import Editor from '../components/Editor';
import {useContext, useState, useEffect} from 'react';
import {DiaryDispatchContext, DiaryStateContext} from '../App';
import useDiary from '../hooks/useDiary';

const Edit = () => {
    const {onDelete, onUpdate} = useContext(DiaryDispatchContext);
    const nav = useNavigate();
    const params = useParams();
    const curDiaryItem = useDiary(params.id);

    const onSubmit = (input) => {
        if (window.confirm('일기를 수정하시겠습니까?')) {
            onUpdate(params.id, input.createDate.getTime(), input.emotionId, input.content);
            nav('/', {replace: true});
        }
    };

    const onClickDelete = () => {
        if (window.confirm('삭제하시겠습니까? 다시 복구되지 않습니다.')) {
            onDelete(params.id);
            nav('/', {replace: true});
        }
    };

    return (
        <div>
            <Header
                leftChild={
                    <Button
                        onClick={() => {
                            nav(-1);
                        }}
                        text={'< 뒤로가기'}
                    />
                }
                rightChild={<Button onClick={onClickDelete} type={'NEGATIVE'} text={'삭제하기'} />}
                title={'일기 수정하기'}
            />

            <Editor onSubmit={onSubmit} initData={curDiaryItem} />
        </div>
    );
};

export default Edit;
