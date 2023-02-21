const React = require('react');

export default function CreateMatch({ sports }) {
  return (
    <div className="modal_window">
      <div className="modal_content">
        <div className="card">
          <div className="card-header">
            <div className="text-header">Создать матч</div>
          </div>
          <div className="card-body">
            <form name="createMatchForm" id="createMatchForm" className="form-create">
              <div className="form-group">
                <label htmlFor="sport_id">
                  Вид спорта:
                  <select className="form-control" name="sport_id" id="sport_id">
                    {sports.map((el) => (
                      <option value={el.id}>{el.title}</option>
                    ))}
                  </select>
                </label>
              </div>
              <div className="form-group">
                <label htmlFor="date">
                  Когда:
                  <input required="" className="form-control" name="date" id="date" type="datetime-local" />
                </label>
              </div>
              <div className="form-group">
                <label htmlFor="address">
                  Где:
                  <input required="" className="form-control" name="address" id="address" type="text" />
                </label>
              </div>
              <div className="form-group">
                <label htmlFor="conditions">
                  Условия участия:
                  <input required="" className="form-control" name="conditions" id="conditions" type="text" />
                </label>
              </div>
              <div className="form-group">
                <label htmlFor="contacts">
                  Контакты:
                  <input required="" className="form-control" name="contacts" id="contacts" type="text" />
                </label>
              </div>
              <div className="form-group">
                <label htmlFor="max_players">
                  Количество игроков:
                  <input required="" className="form-control" name="max_players" id="max_players" type="number" />
                </label>
              </div>
              <div className="form-group" style={{ display: 'none' }}>
                <label htmlFor="admin_id">
                  admin_id:
                  <input required="" className="form-control" name="admin_id" id="admin_id" type="number" />
                </label>
              </div>
              <input type="submit" className="btn" value="Создать" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
