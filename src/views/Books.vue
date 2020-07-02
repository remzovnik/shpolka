<template>
  <main class="v-books">
    <div class="container">
      <h1 class="page-title">{{BOOKS_PAGE.title}}</h1>
      <div class="v-books__desc">{{BOOKS_PAGE.desc}}</div>

      <div class="v-books__sort">
        <button
          class="v-books__sort-toggler"
          :class="{'v-books__sort-toggler_state_active': isSortActive}"
          type="button"
          @click="toggleSort"
        >
          Сортировать
          <SvgIcon class="v-books__sort-toggler-icon" name="dropdown"/>
        </button>
        <div class="v-books__panel" v-show="isSortActive">
          <button
            class="v-books__sort-btn"
            :class="{
              'v-books__sort-btn_state_asc': sortTypeState.byTitle === 'asc',
              'v-books__sort-btn_state_desc': sortTypeState.byTitle === 'desc'
            }"
            type="button"
            @click="sortBy('title')"
          >
            По названию
            <SvgIcon class="v-books__sort-btn-icon" name="sort"/>
          </button>

          <button
            class="v-books__sort-btn"
            :class="{
              'v-books__sort-btn_state_asc': sortTypeState.byAuthor === 'asc',
              'v-books__sort-btn_state_desc': sortTypeState.byAuthor === 'desc'
            }"
            type="button"
            @click="sortBy('authorName')"
          >
            По автору
            <SvgIcon class="v-books__sort-btn-icon" name="sort"/>
          </button>

          <button
            class="v-books__sort-btn"
            :class="{
              'v-books__sort-btn_state_asc': sortTypeState.byYear === 'asc',
              'v-books__sort-btn_state_desc': sortTypeState.byYear === 'desc'
            }"
            type="button"
            @click="sortBy('year')"
          >
            По хронологии
            <SvgIcon class="v-books__sort-btn-icon" name="sort"/>
          </button>
        </div>
      </div>

      <div class="v-books__grid">
        <div
          v-for="(item, index) in list"
          :key="`books-${item}-${index}`"
        >
          <c-book-card
            v-bind="item"
          />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import CBookCard from '@/components/BookCard.vue';
import SvgIcon from '../components/SvgIcon.vue';

export default {
  name: 'VBooks',

  components: {
    CBookCard,
    SvgIcon,
  },

  methods: {
    toggleSort() {
      this.isSortActive = !this.isSortActive;
    },

    sortBy(type) {
      switch (type) {
        case 'title': {
          this.switchSortType('byTitle');
          break;
        }

        case 'authorName': {
          this.switchSortType('byAuthor');
          break;
        }

        case 'year': {
          this.switchSortType('byYear');
          break;
        }

        default: break;
      }

      this.sortList(type);
    },

    switchSortType(type) {
      if (type !== this.sortTypeActive) {
        this.sortTypeState[this.sortTypeActive] = 'default';
        this.sortTypeActive = type;
      }

      switch (this.sortTypeState[type]) {
        case 'default': {
          this.sortTypeState[type] = 'asc';
          break;
        }

        case 'asc': {
          this.sortTypeState[type] = 'desc';
          break;
        }

        case 'desc': {
          this.sortTypeState[type] = 'asc';
          break;
        }

        default: break;
      }
    },

    sortList(property) {
      if (this.sortTypeState[this.sortTypeActive] === 'asc') {
        this.list = this.BOOKS_LIST.sort((a, b) => ((a[property] > b[property]) ? 0 : -1));
      }

      if (this.sortTypeState[this.sortTypeActive] === 'desc') {
        this.list = this.BOOKS_LIST.sort((a, b) => ((a[property] > b[property]) ? -1 : 0));
      }
    },

    ...mapActions([
      'getBooksPage',
      'getBooksList',
    ]),
  },

  computed: {
    list: {
      get() {
        return this.BOOKS_LIST;
      },

      set(value) {
        return value;
      },
    },

    ...mapGetters([
      'BOOKS_PAGE',
      'BOOKS_LIST',
    ]),
  },

  data() {
    return {
      isSortActive: false,
      sortTypeActive: null,
      sortTypeState: {
        byTitle: 'default',
        byYear: 'default',
        byAuthor: 'default',
      },
    };
  },

  beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.getBooksPage();
      vm.getBooksList();
    });
  },
};
</script>

<style lang="scss">
.v-books {
  padding: 80px 0;

  &__desc {
    margin-bottom: 24px;
    text-align: center;
    line-height: 1.6;
  }

  &__sort {
    display: flex;
    justify-content: center;
  }

  &__sort-toggler {
    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
    padding: 16px;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 300;
    letter-spacing: 0.2em;
    color: $color-gray;

    &_state {
      &_active {
        color: $color-primary;

        .v-books {
          &__sort-toggler-icon {
            transform: rotate(-180deg);
          }
        }
      }
    }
  }

  &__sort-toggler-icon {
    margin-left: 8px;
    width: 12px;
    height: 12px;
    fill: $color-primary;
    transition: transform 0.2s ease-out;
  }

  &__panel {
    position: absolute;
    top: -4px;
    left: 50%;
    transform: translateX(-50%);
    width: 220px;
    padding: 64px 24px 16px;
    border: 1px solid $color-gray;
    background-color: $color-white;
  }

  &__sort {
    position: relative;
  }

  &__sort-btn {
    @include reset-btn;
    display: flex;
    align-items: center;
    padding: 8px;
    text-transform: uppercase;
    font-size: 10px;
    font-weight: 300;
    letter-spacing: 0.2em;

    &_state {
      &_asc {
        .v-books__sort-btn-icon {
          display: block;
          transform: rotate(180deg);
        }
      }

      &_desc {
        .v-books__sort-btn-icon {
          display: block;
        }
      }
    }

    &:not(:last-of-type) {
      margin-bottom: 16px;
    }
  }

  &__sort-btn-icon {
    display: none;
    margin-left: 8px;
    width: 10px;
    height: 10px;
    fill: $color-decor;
  }
}
</style>
