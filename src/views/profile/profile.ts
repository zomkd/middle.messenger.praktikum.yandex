import { Block } from '../../utils/block/block';
import { ProfileCard } from '../../components/profile-card/profile-card-mixin';
import { ProfilePage } from '../../components/profile-card/profile-card-mixin';
import AuthController from '../../controllers/AuthController';
import template from './profile.pug';
import './profile.scss';

export class Profile extends Block {
  constructor() {
    super({});
  }
  init() {
    // this.children.profileCard = new ProfileCard({
    //   userInfoName: 'testers',
    //   img: 'src',
    // });
    this.children.profileCard = new ProfileCard({
      userInfoName: 'testers',
      img: 'src',
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
