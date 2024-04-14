import {useParams, useNavigate} from 'react-router-dom';
import Header from '../components/Header';
import Button from '../components/Button';
import Viewer from '../components/Viewer';
import useDiary from '../hooks/useDiary';
import usePageTitle from '../hooks/usePageTitle';

const Diary = () => {
    const nav = useNavigate();
    const params = useParams();
    const curDiaryItem = useDiary(params.id);
    usePageTitle(`${params.id}번 째 일기`);

    if (!curDiaryItem) {
        return <div>데이터 로딩중...</div>;
    }

    const {createDate, emotionId, content} = curDiaryItem;
    const date = {
        year: String(new Date(createDate).getFullYear()),
        month: String(new Date(createDate).getMonth() + 1).padStart(2, '0'),
        day: String(new Date(createDate).getDate()).padStart(2, '0'),
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
                rightChild={
                    <Button
                        onClick={() => {
                            nav(`/edit/${params.id}`);
                        }}
                        text={'수정하기'}
                    />
                }
                title={`${date.year}-${date.month}-${date.day} 기록`}
            />
            <Viewer content={content} emotionId={emotionId} />
        </div>
    );
};
export default Diary;
