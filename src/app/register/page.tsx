"use client";

import { RegisterSystem } from "components/data/RequestSystem";
import { PropertyCard } from "components/data/PropertyCard";
import { Layout } from "components/Layout";

import { IPropertyShape } from "interfaces";

import { useFetchOwnProperties } from "hooks";

export default function Page() {
  const { data, error } = useFetchOwnProperties();

  if (error) return <div className="swr-message">Failed to load</div>;
  if (!data) return <div className="swr-message">Loading...</div>;

  const properties = data.properties;
  const renderRegisteredProperties = () => {
    return properties.map((property: IPropertyShape, index: number) => (
      <PropertyCard key={index} property={property} />
    ));
  };
  return (
    <Layout>
      <RegisterSystem />
      <h2>{`Meus registros: (${properties.length})`}</h2>
      <div className="search-result">{renderRegisteredProperties()}</div>
    </Layout>
  );
}
