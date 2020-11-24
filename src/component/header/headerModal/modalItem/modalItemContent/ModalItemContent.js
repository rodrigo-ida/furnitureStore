import React, { useEffect } from "react";
import CSSTransition from "react-transition-group/CSSTransition";

import "./ModalItemContent.scss";

export default (props) => {
    const { setShowModalContent, setModalItemMenu } = props;

    const closeBtnHandler = (event) => {
        event.stopPropagation();

        setShowModalContent(false);
        setTimeout(() => setModalItemMenu(false), 300);
    };

    useEffect(() => {
        setShowModalContent((prevState) => (prevState = true));
        console.log(props.item1.img);
    }, [setShowModalContent]);

    return (
        <CSSTransition
            in={props.showModalContent}
            mountOnEnter
            unmountOnExit
            timeout={300}
            classNames={{
                enter: "modal-item__content-enter",
                enterActive: "modal-item__content-entering",
                enterDone: "modal-item__content-entered",
                exit: "modal-item__content-entered",
                exitActive: "modal-item__content-exiting",
            }}
        >
            <div className="modal-item__content">
                <div className="modal-item__content__close-btn-container">
                    <button
                        className="modal-item__content__close-btn"
                        onClick={closeBtnHandler}
                    >
                        &larr; Voltar
                    </button>
                    <hr></hr>
                </div>
                <div className="modal-item__content__list-container">
                    <ul className="modal-item__content__list">
                        <li className="modal-item__content__list__title">
                            {props.title}
                        </li>
                        <li className="modal-item__content__list__item modal-item__content__list__item-1">
                            <div className="modal-item__content__list__item__paragraph-container">
                                <p className="modal-item__content__list__item__paragraph-first">
                                    {props.item1.content}
                                </p>
                            </div>
                            <img className="modal-item__content__list__item-img" src={props.item1.img} />
                        </li>
                        <li className="modal-item__content__list__item modal-item__content__list__item-2">
                            <div className="modal-item__content__list__item__paragraph-container">
                                <p className="modal-item__content__list__item__paragraph">
                                    {props.item2.content}
                                </p>
                            </div>

                            <img className="modal-item__content__list__item-img" src={props.item2.img} />
                        </li>
                        <li className="modal-item__content__list__item modal-item__content__list__item-3">
                            <div className="modal-item__content__list__item__paragraph-container">
                                <p className="modal-item__content__list__item__paragraph">
                                    {props.item3.content}
                                </p>
                            </div>
                            <img className="modal-item__content__list__item-img" src={props.item3.img} />
                        </li>
                        <li className="modal-item__content__list__item modal-item__content__list__item-4">
                            <div className="modal-item__content__list__item__paragraph-container">
                                <p className="modal-item__content__list__item__paragraph">
                                    {props.item4.content}
                                </p>
                            </div>

                            <img className="modal-item__content__list__item-img" src={props.item4.img} />
                        </li>
                    </ul>
                </div>
            </div>
        </CSSTransition>
    );
};
