import React from 'react';

const FilterForm = ({ filter, setFilter }) => {
  function handleChange(e) {
    setFilter(e.target.value);
  }

  return (
    <form aria-label='Filtrar por:'>
      <input
        type='radio'
        name='filter'
        value='all'
        className='form-radio'
        id='all'
        onChange={handleChange}
        checked={filter === 'all'}
      />
      <label htmlFor='all' className='form-label'>
        Todos os Produtos
      </label>

      <input
        type='radio'
        name='filter'
        value='cestos'
        className='form-radio'
        id='cestos'
        onChange={handleChange}
        checked={filter === 'cestos'}
      />
      <label htmlFor='cestos' className='form-label'>
        Cestos
      </label>

      <input
        type='radio'
        name='filter'
        value='suplas'
        className='form-radio'
        id='suplas'
        onChange={handleChange}
        checked={filter === 'suplas'}
      />
      <label htmlFor='suplas' className='form-label'>
        Suplás
      </label>

      <input
        type='radio'
        name='filter'
        value='outros'
        className='form-radio'
        id='outros'
        onChange={handleChange}
        checked={filter === 'outros'}
      />
      <label htmlFor='outros' className='form-label'>
        Outros
      </label>
    </form>
  );
};

export default FilterForm;
