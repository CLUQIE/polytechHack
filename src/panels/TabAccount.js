import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { PanelHeader, FormLayout, FormStatus, Button, Input, PanelHeaderBack, View, Panel, Slider, Select, Group, Div, InfoRow,
  Progress, File, Tabs, TabsItem, Avatar } from '@vkontakte/vkui';
import Icon28Camera from '@vkontakte/icons/dist/28/camera';
import Icon24Document from '@vkontakte/icons/dist/24/document';
import './TabAccount.css';

export default class TabAccount extends Component {
  static propTypes = {
    userInfo: PropTypes.object,
    update: PropTypes.func.isRequired,
    go: PropTypes.func.isRequired,
  };

  static defaultProps = {
    userInfo: {
      first_name: 'Мирон',
      last_name: 'Пузанов',
      photo_200: 'https://sun9-27.userapi.com/c855320/v855320609/d44af/4gDyRzlWMw4.jpg?ava=1',
      bdate: '12.11.2000',
    },
  };

  constructor (props) {
    super(props);

    this.state = {
      value1: 50,
    };
  }

  options () {
    const options = [];
    for (let i = 0; i <= 10; i += 2) {
      options.push(<option value={`${i / 10}`} key={`${i}`}>{i / 10}</option>);
    }
    return options;
  }

  render() {
    const { userInfo } = this.props;
    return (
      <Fragment>
        <div className="Account">
          <div className="Account__in">
            <div className="Account__header">
              <div className="Account__hero">
                <div className="Account__avatar">
                  <img src={userInfo.photo_200} />
                </div>
                <div className="Account__name">{userInfo.first_name} {userInfo.last_name}</div>
              </div>
            </div>

            <div className="Account__data">
              {/* <div className="Account__dataTabs">
                <Tabs>
                  <TabsItem>Данные</TabsItem>
                  <TabsItem>Отзывы</TabsItem>
                  <TabsItem>История</TabsItem>
                </Tabs>
              </div> */}

              <FormLayout>
                <Input
                  top="Дата рождения"
                  value={userInfo.bdate}
                  onChange={() => {}}
                />
                <Input
                  top="Номер телефона"
                  value={'+7 902 888 9900'}
                  onChange={() => {}}
                />
                <Input
                  top="Место учебы/работы"
                  value={'РГУ им. А. Н. Косыгина (бывш. МГУДТ)'}
                  onChange={() => {}}
                />
                <Input
                  top="Владение иностранными языками"
                  value={'Русский, English'}
                  onChange={() => {}}
                />
              </FormLayout>
            </div>
          </div>
        </div>

        {/* <div>
            Карма
        </div>
        <div>
          <FormLayout>

            <File top="Загрузите ваше фото" before={<Icon28Camera />} size="l">
            Открыть галерею
            </File>

            <InfoRow title="Default">
              <Progress value={40} />
            </InfoRow>
          </FormLayout>
        </div> */}

        <div style={{ height: 60 }} />
      </Fragment>
    );
  }
}
