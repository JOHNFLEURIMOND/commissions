import {
  FetchDeathCertificatesQuery,
  SearchDeathCertificatesQuery,
  LookupDeathCertificateOrderQuery,
} from './queries/graphql-types';

export type DeathCertificate = NonNullable<
  FetchDeathCertificatesQuery['deathCertificates']['certificates'][0]
>;

export type DeathCertificateSearchResults = SearchDeathCertificatesQuery['deathCertificates']['search'];

export type DeathCertificateOrder = LookupDeathCertificateOrderQuery['deathCertificates']['order'];
