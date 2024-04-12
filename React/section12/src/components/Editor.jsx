import Button from './Button';
import './Editor.css';
import EmotionItem from './EmotionItem';
import {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {emotionList} from '../util/constant';

const getStringedDate = (targetDate) => {
    let year = String(targetDate.getFullYear()).padStart(2, '0');
    let month = String(targetDate.getMonth() + 1).padStart(2, '0');
    let date = String(targetDate.getDate()).padStart(2, '0');
    return `${year}-${month}-${date}`;
};

const Editor = ({initData, onSubmit}) => {
    const [input, setInput] = useState({
        createDate: new Date(),
        emotionId: 3,
        content: '',
    });
    const nav = useNavigate();

    useEffect(() => {
        if (initData) {
            setInput({
                ...initData,
                createDate: new Date(Number(initData.createDate)),
            });
        }
    }, [initData]);

    const onChangeInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        if (name === 'createDate') {
            value = new Date(value);
        }

        setInput({
            ...input,
            [name]: value,
        });
    };

    const onClickSubmit = () => {
        onSubmit(input);
    };

    return (
        <div className="Editor">
            <section className="date_section">
                <h4>오늘의 날짜</h4>
                <input
                    name="createDate"
                    onChange={onChangeInput}
                    value={getStringedDate(input.createDate)}
                    type="date"
                ></input>
            </section>
            <section className="emotion_section">
                <h4>오늘의 감정</h4>
                <div className="emotion_list_wrapper">
                    {emotionList.map((item) => (
                        <EmotionItem
                            onClick={() => {
                                onChangeInput({
                                    target: {
                                        name: 'emotionId',
                                        value: item.emotionId,
                                    },
                                });
                            }}
                            key={item.emotionId}
                            {...item}
                            isSelected={item.emotionId === input.emotionId}
                        />
                    ))}
                </div>
            </section>
            <section className="content_section">
                <h4>오늘의 일기</h4>
                <textarea
                    name="content"
                    value={input.content}
                    onChange={onChangeInput}
                    placeholder="오늘은 어땟나요?"
                ></textarea>
            </section>
            <section className="button_section">
                <Button
                    onClick={() => {
                        nav(-1);
                    }}
                    text={'취소하기'}
                />
                <Button onClick={onClickSubmit} text={'작성완료'} type={'POSITIVE'} />
            </section>
        </div>
    );
};

export default Editor;
