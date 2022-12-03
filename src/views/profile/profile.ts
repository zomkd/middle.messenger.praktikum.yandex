import { Block } from '../../utils/block/block';
import { ProfileCard } from '../../components/profile-card/profile-card-mixin';
import template from './profile.pug';
import './profile.scss';

export class Profile extends Block {
  constructor() {
    super('main', {});
  }
  init() {
    this.children.profileCard = new ProfileCard({
      userInfoName: 'testers',
      img: 'src',
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
