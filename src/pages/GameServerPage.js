import React from 'react';
import {getServerList, findServerInfo} from '../utils/game-server';
import {calculateKimTinhThach} from "../utils";

const serverList = getServerList().sort();

function GameServerForm(props) {
    return <form>
        <div className="form-group row">
            <label className="col-sm-2 col-form-label">Máy chủ</label>
            <div className="col-sm-10">
                <select name="targetServerName" onChange={props.onChange} className="form-control">
                    <option>-----</option>
                    {serverList.map((server, idx) => <option key={idx} value={server}>{server}</option>)}
                </select>
            </div>

        </div>


        {props.children}
    </form>
}

function renderServerResults(serverResults) {
    return <ul>
        {serverResults.map((r, idx) => <li key={idx}>
            {r.length > 1 ? `${r[1].join(" hợp với ")} = ${r[0]}` : r[0]}
        </li>)}
    </ul>
}

class GameServerPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            targetServerName: null,
            serverResults: null
        }
    }

    // https://reactjs.org/docs/forms.html#handling-multiple-inputs
    handleGameServerFormInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value <= 0 ? 1 : value
        }, function () {
            this.setState({
                serverResults: findServerInfo(this.state.targetServerName)
            })
        });


    };

    render() {
        const {serverResults} = this.state;

        return (
            <div id="tra-cuu-ten-may-chu-tlbb">
                <h4>Tra cứu tên, lịch sử máy chủ game Thiên Long Bát Bộ FPT, Tân Thiên Long VNG (TLBB, TTL3D)</h4>

                <GameServerForm onChange={this.handleGameServerFormInputChange}>
                    {serverResults && serverResults.map((sr, idx) => <div key={idx}>
                        <strong>Giai đoạn {idx + 1}</strong>
                        {renderServerResults(sr)}

                        <i>Tác giả: LingYun@Thanh Long - Dữ liệu thu thập từ tlbb.readthedocs.io/tlbb_tap_luc/hoat_dong_su_kien/giai_doan/hop_nhat_may_chu/, tlbb.gate.vn, ttl3d.zing.vn</i>
                    </div>)
                    }
                </GameServerForm>

            </div>
        )
    }
}

export default GameServerPage;