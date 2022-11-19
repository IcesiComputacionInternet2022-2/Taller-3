export default function Modal({modal, modalRef}: {modal: { message: string; title: string; }; modalRef: any; }) {
    return (
        <>
            <input type="checkbox" id="my-modal-4" ref={modalRef} className="modal-toggle"/>
            <label htmlFor="my-modal-4" className={"modal cursor-pointer"}>
                <label className="modal-box relative shadow-none" htmlFor="">
                    <h3 className="text-lg font-bold">{modal.title}</h3>
                    <p className="py-4">{modal.message}</p>
                </label>
            </label>

        </>
    )
}
