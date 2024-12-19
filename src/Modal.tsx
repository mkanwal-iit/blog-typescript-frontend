import "./Modal.css";
type Props = {
  children: React.ReactNode;
  show: boolean;
  onClose: () => void;
};
export function Modal({ children, show, onClose }: Props) {
  if (show) {
    return (
      <div className="modal-background">
        <section className="modal-main">
          {children}
          <button className="close" type="button" onClick={onClose}>
            &#x2715;
          </button>
        </section>
      </div>
    );
  }
}