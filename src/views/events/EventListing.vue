<template>
  <b-container fluid>
    <b-row>
      <b-col align="center">
        <h1> Les événements culturels à aider </h1>
      </b-col>
    </b-row>
    <hr>
    <b-row>
      <b-col cols="2">
        <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Rechercher un mot clé" />
      </b-col>
      <b-col cols=1>
        <b-button size="sm" class="my-2 my-sm-0" type="submit">Rechercher</b-button>
      </b-col>
      <b-col cols=2>

        <b-form-select v-model="selected" :options="categories" class="mb-3" />
      </b-col>

      <b-col cols="4">
        <label> Date </label>
        <b-form-input class="form-search" type="date" style="width:80%" />
      </b-col>

    </b-row>
    <hr>
    <b-row>

      <b-col cols="12" md="4" lg="3" :key="item.id" v-for="item in data">
        <div>
          <b-card :title="item.title" :img-src="item.medias.first" img-alt="Image" img-top tag="article" style="max-width: 20rem;" class="mb-2">
            <p class="card-text">
              {{ item.description | truncate(100, '...') }}
            </p>
            <p>
              Le {{ item.date }}
            </p>
            <b-button :to="{ name: 'event-page', params:{ id:item.id}}" variant="primary">En savoir plus</b-button>
          </b-card>
        </div>
      </b-col>

    </b-row>
    <hr>
    <b-row>
      <b-col cols="12" align="center">
        <b-button-group class="mx-1">
          <b-btn>Précédent</b-btn>
          <b-btn>Suivant</b-btn>
        </b-button-group>
      </b-col>

    </b-row>
    <hr>
  </b-container>
</template>
<script>
export default {
  name: "Events",

  data() {
    return {
      selected: null,
      categories: [
        { value: null, text: "Catégorie d'événement" },
        { value: "Spectacle", text: "Spectacle" },
        { value: "musique", text: "Musique" },
        { value: "chant", text: "Chant" },
        { value: "théâtre", text: "Théâtre" }
      ],
      data: [
        {
          id: 1,
          title: "Self-enabling optimizing monitoring",
          description:
            "Reprehenderit aut quis molestiae provident et optio. Et excepturi enim accusamus sint asperiores. Est repellat sint quia accusamus qui nemo iure.\n\nVel nulla qui perferendis sequi ducimus inventore laudantium. Ut et rerum vel tempore qui ex.\n\nDolores pariatur aliquam est aliquam velit illum dolorem. Officia iusto minus reiciendis quo fugiat. Eaque deleniti vel pariatur modi minus est deleniti. Id et reprehenderit consequuntur omnis ad nulla.",
          date: "2018-11-26",
          contact_email: null,
          medias: {
            first: 'https://theatrelacbrome.ca/wp-content/uploads/2018/05/banniere4.jpg',
          },
        },
        {
          id: 2,
          title: "Cross-group tertiary functionalities",
          description:
            "Et et enim delectus animi ut ut ex. Itaque nemo repudiandae voluptatum et nulla. Cupiditate necessitatibus et repudiandae. Quia aperiam repudiandae porro blanditiis consequatur.\n\nLibero aut fugit assumenda reprehenderit. Occaecati neque possimus ut non. Distinctio nesciunt voluptate eligendi et. Officia est dolorem optio unde.\n\nInventore est cumque earum rem delectus eaque eius aliquid. Minus qui reprehenderit et aut quis ut omnis. Adipisci cum voluptate nostrum voluptatem odio.\n\nQuas quidem inventore nulla quis harum. Et a ex voluptatem consequatur ut ut. Facilis tempore nisi quia sequi ducimus voluptatum quia. Rerum odit aliquam dolore harum.",
          date: "2018-09-25",
          contact_email: "georgette.robel@example.net",
          medias: {
            first: null
          }
        },
        {
          id: 3,
          title: "Networked human-resource matrices",
          description:
            "Est id sapiente non eos veritatis qui. Repellendus fuga omnis odit qui. Culpa in deleniti et. Animi harum possimus ipsam tenetur ut.\n\nOmnis rem est molestiae et. Odio quasi similique id quia. Voluptas dolorum eius fuga et voluptates.\n\nModi iste quas quidem qui molestias. Id rerum repellendus sed tempore eos dolor. Autem possimus maiores est sint aperiam sit corrupti. Rerum minus aperiam et velit.",
          date: "2018-11-06",
          contact_email: "brielle.wiegand@example.com",
          medias: {
            first: null
          }
        },
        {
          id: 4,
          title: "Pre-emptive asynchronous function",
          description:
            "Rem repellendus omnis atque cumque doloribus. Voluptatem a sit ut consectetur dolor id. Accusamus est ex sunt recusandae dolor eos minus velit. Accusamus animi est culpa inventore corporis dolore.\n\nA dolores voluptatem ut beatae beatae. Repudiandae quis vero ipsum deserunt. Ipsam libero delectus perspiciatis deserunt dolorem eveniet vel qui.\n\nDignissimos aspernatur reiciendis aut ea molestias maiores provident. Et eum nemo excepturi voluptatum pariatur quo et officia.\n\nSunt quia sit aut est sunt accusamus. Harum eos sint temporibus maxime nobis ut qui. Possimus quibusdam assumenda qui ipsam.\n\nFacilis soluta voluptatibus ut. Aut totam sunt officiis quis alias. Earum rerum dolor aut. Quam voluptate et temporibus minima molestiae.",
          date: "2018-09-24",
          contact_email: null,
          medias: {
            first: null
          }
        },
        {
          id: 5,
          title: "Switchable context-sensitive knowledgebase",
          description:
            "Culpa unde sed enim quas. Doloribus impedit laborum quod hic aut dolore. Facere blanditiis adipisci aspernatur quibusdam consequatur voluptatem occaecati consectetur.\n\nRepellendus reprehenderit laudantium consequatur rerum. Rerum corporis deleniti et reprehenderit at quae maiores laudantium.",
          date: "2018-11-17",
          contact_email: null,
          medias: {
            first: null
          }
        },
        {
          id: 6,
          title: "Re-engineered zeroadministration knowledgebase",
          description:
            "Molestiae nulla et facilis. Ut blanditiis voluptas repellendus commodi animi. Unde eius recusandae voluptatem nesciunt.\n\nVero animi aut cumque omnis sequi autem ut. Aut iusto ab ullam maiores. Vel occaecati suscipit et dolorem est quas corrupti. Explicabo sed doloribus consequuntur ducimus veniam.",
          date: "2018-11-19",
          contact_email: null,
          medias: {
            first: null
          }
        },
        {
          id: 7,
          title: "Multi-lateral actuating complexity",
          description:
            "Aliquam sunt laudantium placeat et. Pariatur deserunt explicabo debitis quia dolorem ex. Dolorum maxime saepe nesciunt. Ipsam et illo nobis aperiam recusandae quia eum.\n\nAlias itaque sit alias quo voluptas. Dolor voluptatum ad eligendi voluptatem nemo alias. Animi totam tempore iusto quas impedit quia ea sed. Non sed omnis minus repellendus voluptas voluptatum repellendus.\n\nReiciendis voluptas repellendus fugiat in ullam exercitationem. Id ab et dolore sint.\n\nSimilique qui reprehenderit vero architecto at. Corporis autem culpa voluptas deleniti qui. Ut soluta fuga quam. Enim voluptatem non qui velit.\n\nQuisquam amet et ea hic cum. Ea qui consequatur officiis vitae molestias est possimus voluptas. Beatae quo quisquam reiciendis enim impedit beatae.",
          date: "2018-09-01",
          contact_email: "rratke@example.net",
          medias: {
            first: null
          }
        },
        {
          id: 8,
          title: "Ameliorated stable encryption",
          description:
            "Perferendis delectus eos harum aliquam ut rerum incidunt. Nulla qui mollitia modi fugiat incidunt ut sunt voluptas. Rerum libero numquam omnis iusto consequatur beatae incidunt. Nesciunt itaque nulla magni rem ratione quidem quidem optio.\n\nEum neque aspernatur optio quibusdam fugit. Autem sunt aperiam iste et corporis sed totam. Et voluptas quia magnam ut nostrum iusto. Quia maiores eum accusamus dolor quae esse assumenda omnis.\n\nDolore enim eum repudiandae occaecati eligendi iusto dignissimos consectetur. Facilis aut eum accusantium laudantium reiciendis facere. Nulla id neque praesentium architecto eaque.\n\nTotam enim et dolor. Ut similique quis distinctio. Quia beatae aut numquam est quia. Et id veniam unde quia deleniti laborum quia.\n\nNesciunt sit voluptas nihil dolores. Quaerat facere cum occaecati est ut dolores. Sit similique atque aut qui culpa. Praesentium molestiae aut fugit sit quis laboriosam.",
          date: "2018-11-14",
          contact_email: "janis.dibbert@example.net",
          medias: {
            first: null
          }
        },
        {
          id: 9,
          title: "Profit-focused zeroadministration GraphicInterface",
          description:
            "Et incidunt incidunt reiciendis beatae aliquid praesentium. Porro eum impedit velit sint consectetur quia non.\n\nSunt voluptas quasi illum. A deleniti dignissimos iure et. Maiores omnis aut tempore tempora qui facilis ea eveniet. Architecto deleniti enim id magnam.\n\nLibero aliquid quis voluptate necessitatibus distinctio. Voluptatibus ad nihil reprehenderit similique nostrum mollitia. Accusamus voluptas beatae deleniti corporis illo molestiae eaque.\n\nExplicabo odit in similique dolorem. Dolorem magni est nulla corrupti. Perspiciatis quas vel harum iste. Rerum eum quia accusamus.",
          date: "2018-08-31",
          contact_email: "robert.friesen@example.com",
          medias: {
            first: null
          }
        },
        {
          id: 10,
          title: "Horizontal system-worthy archive",
          description:
            "Accusantium animi velit esse dolorem aut. Voluptatem animi dolorum asperiores atque dolor. Soluta alias doloribus reiciendis possimus sint iure. Et placeat voluptatem iure omnis.\n\nQuasi sapiente adipisci aut autem fuga eligendi dolor. Inventore dolor cum ipsam corporis maiores odio et. Nesciunt qui modi non at modi dolorem.\n\nDolores qui alias hic aliquid nulla. Consequatur labore dicta tenetur distinctio ipsum quibusdam. Magni mollitia corporis sunt beatae corporis velit voluptas. Quis quia vitae sed esse.",
          date: "2018-11-05",
          contact_email: "maryse52@example.org",
          medias: {
            first: null
          }
        },
        {
          id: 11,
          title: "Re-engineered encompassing approach",
          description:
            "Aliquam saepe quam quo dolores repellendus animi cum. Quaerat aspernatur sit voluptas id placeat veniam tenetur. Dolore itaque cum doloremque voluptatem quae et praesentium fugit.\n\nCulpa sit eaque omnis sit. Voluptas quis ullam vel et ab veritatis. Voluptatibus aut rem et repellat maxime. Velit voluptatem excepturi eveniet molestiae neque.",
          date: "2018-09-25",
          contact_email: "qschmeler@example.net",
          medias: {
            first: null
          }
        },
        {
          id: 12,
          title: "Total motivating extranet",
          description:
            "Aliquam temporibus natus inventore aspernatur voluptas quis est. Dolore expedita omnis veritatis ad sint. Qui reprehenderit ullam delectus sed officia. Nihil minus iusto inventore.\n\nNeque et quis magni error ut. Et qui mollitia tenetur quo vel qui sunt. Repudiandae facilis voluptates nam impedit nostrum expedita.\n\nSequi vero quam minima earum et corporis. Nemo distinctio nesciunt sit qui quia ipsum beatae quae. Consequatur sapiente ut eum aut optio pariatur.\n\nEarum laborum id recusandae libero ut corporis. Voluptate dolorem provident enim saepe vitae adipisci maiores beatae. Ut architecto dolores incidunt quaerat mollitia. Distinctio et et esse enim corrupti.\n\nNihil tenetur harum molestias laborum officiis rerum. Libero iure autem et. Sed ullam sit enim blanditiis. Saepe consequatur impedit explicabo.",
          date: "2018-10-07",
          contact_email: "reed.hintz@example.com",
          medias: {
            first: null
          }
        },
        {
          id: 13,
          title: "Multi-layered full-range throughput",
          description:
            "Aperiam minima consequatur ipsum odio quia blanditiis. Perspiciatis eius beatae atque non architecto eveniet perferendis. Dolorem dolores quae perferendis.\n\nEum eos repellendus praesentium vero. Maiores et est eveniet nisi exercitationem similique. Nihil soluta incidunt quae velit cumque pariatur vero temporibus. Excepturi non recusandae non velit unde consequatur accusantium.\n\nQuod aut ut voluptatum ea aliquid. Nostrum dolore quas incidunt repellendus accusamus.",
          date: "2018-11-23",
          contact_email: null,
          medias: {
            first: null
          }
        },
        {
          id: 14,
          title: "Persevering multi-tasking definition",
          description:
            "Modi et natus nihil et reiciendis sapiente et. Praesentium rerum distinctio eos eveniet maiores sit. Nihil necessitatibus numquam vero non quis quas. Et ipsam quibusdam velit sapiente cumque.\n\nVoluptate quis iste dolor id ea laborum voluptatem magnam. Sit quis adipisci esse rerum soluta sed quo. Alias qui id quo ea dolor ullam porro. Quas molestiae molestias velit officiis officia quia id.",
          date: "2018-10-11",
          contact_email: null,
          medias: {
            first: null
          }
        },
        {
          id: 15,
          title: "Enterprise-wide directional array",
          description:
            "Sunt rerum quod qui quod voluptas suscipit consequatur. Quidem rerum vel excepturi. Facilis dolorem ut enim dolorem nemo ipsam. Sapiente dolore facere sed voluptas quas.\n\nAut voluptatem consequuntur nemo aut. Nisi occaecati mollitia vel cupiditate et consequatur aut.\n\nAdipisci perspiciatis molestiae ut maxime recusandae. Dolor sint recusandae minima ipsa. Alias hic voluptas voluptas et sapiente non rem. Aut quia corporis neque aut repellat molestiae ullam labore.",
          date: "2018-10-04",
          contact_email: null,
          medias: {
            first: null
          }
        },
        {
          id: 16,
          title: "Cloned reciprocal projection",
          description:
            "Error porro consequuntur dolores et omnis. Exercitationem aliquam ipsum minima tenetur aut vitae. Ut facere dolorum et molestiae assumenda. Qui iure est qui accusamus.\n\nIncidunt esse aut doloremque. Est beatae tenetur aliquam dolores. Excepturi eum omnis quaerat laboriosam. Aut unde tempore vero est.\n\nEt est vel reiciendis cumque odit quod. Sint sint sed et libero cupiditate quis quidem. Necessitatibus facilis excepturi ut qui nobis et. Quo non aperiam eum quidem.\n\nIn quo voluptatem occaecati facere sunt commodi quo labore. Architecto saepe sint quaerat assumenda. Est sapiente placeat qui rerum amet. Inventore vel aliquam quae inventore ea non vel.\n\nRepellendus ut voluptatem atque ut quaerat illum quis. Cum sit deleniti aspernatur aut veniam tempora. Dolor dolorem nesciunt inventore fugit delectus aut.",
          date: "2018-11-16",
          contact_email: "antwan.blick@example.org",
          medias: {
            first: null
          }
        },
        {
          id: 17,
          title: "Inverse transitional hierarchy",
          description:
            "Eum ipsum pariatur molestias est expedita. Magni itaque et delectus necessitatibus velit ipsam laboriosam. Quia placeat consequatur sunt voluptatibus. Culpa minus fugit voluptates qui dolor.\n\nEx voluptatibus in nihil fugit vero qui dicta. Qui autem possimus tenetur. Molestiae nihil omnis est.",
          date: "2018-10-24",
          contact_email: "considine.alfredo@example.com",
          medias: {
            first: null
          }
        },
        {
          id: 18,
          title: "Sharable didactic focusgroup",
          description:
            "Fuga tempore aut ipsa dolores repellendus. Occaecati earum amet suscipit sed beatae est. Aperiam voluptas tenetur voluptatem recusandae nesciunt et et.\n\nVoluptatem quasi voluptatem aperiam est a alias fugit. Atque fugit nihil quas aut iure dolores sunt consequatur. Voluptatum saepe fugit temporibus velit dicta reiciendis expedita. Nesciunt maiores ex autem temporibus quis totam iste placeat.",
          date: "2018-10-07",
          contact_email: "barton.barbara@example.net",
          medias: {
            first: null
          }
        },
        {
          id: 19,
          title: "Fundamental human-resource workforce",
          description:
            "Quae at et eum doloribus sed. Et perspiciatis et aut est perspiciatis modi. Recusandae et sunt illo. Quos doloremque ex nihil.\n\nSunt minima rerum molestiae dolores officia molestiae explicabo. In dolor omnis et magni quia fugit nihil. Veritatis corporis aut vel neque natus expedita nihil.\n\nSequi qui odio aut tempore ut. Porro voluptas quia quia est. Ipsum vel praesentium ducimus velit est occaecati sed. Est alias odio fugiat libero.\n\nExplicabo necessitatibus eum neque nesciunt hic earum. Et beatae et omnis quos. Qui esse error voluptatibus.",
          date: "2018-10-09",
          contact_email: null,
          medias: {
            first: null
          }
        },
        {
          id: 20,
          title: "Versatile bi-directional software",
          description:
            "Ut rerum minus laudantium fuga. Qui iste et sit reiciendis. Reiciendis quis voluptas et corrupti itaque dolore.\n\nHarum sunt iure in atque blanditiis. Nobis voluptas sequi aut labore praesentium. Aliquid consequatur mollitia nihil et. Laborum consequatur assumenda quasi voluptatibus fuga.\n\nConsequatur magnam iusto corrupti. Et porro earum enim.\n\nMaxime corrupti debitis alias est provident dolor. Et quos ut aut odio nam. Dignissimos molestiae facilis nihil a accusantium officiis molestiae. A ipsum repellat omnis doloribus vel. Officiis eveniet perspiciatis sunt sed eum amet ut optio.",
          date: "2018-09-01",
          contact_email: null,
          medias: {
            first: null
          }
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.form-search {
  display: inline;
}
</style>
